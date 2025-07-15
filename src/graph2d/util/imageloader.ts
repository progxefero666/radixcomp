//src\graph2d\util\imageloader.ts

import { Dim2d } from "../types2d";


/**
 * ImageLoader.getImageBitmapFromUrl
 */
export class ImageLoader {

     public static async arrayBufferToImageBitmap(buffer: ArrayBuffer, mimeType: string): Promise<ImageBitmap> {
        const blob = new Blob([buffer], { type: mimeType });
        return await createImageBitmap(blob); 
    }

    static getImage(file: File): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);            
            img.onload = () => resolve(img);
            img.onerror = (error) => {
                URL.revokeObjectURL(img.src); //
                reject(new Error("Error al cargar la imagen")); 
            };
        });
    }

    public static async getImageBitmapFromUrl(url: string): Promise<ImageBitmap> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = async () => {
                const imageBitmap = await createImageBitmap(img);
                resolve(imageBitmap);
            }    
            img.onerror = (err) => reject(err);
        });
    }

    //public cvimages: ImageBitmap[] = [];
    public static async getImagesBitmaps(imgbuffers:ArrayBuffer[]): Promise<ImageBitmap[]> {
        let mimetype = "image/png"; 
        let cvimages: ImageBitmap[] = [];
        try {
            for (let idx=0;idx<imgbuffers.length;idx++) {
                cvimages[idx] = await ImageLoader.arrayBufferToImageBitmap(imgbuffers[idx], mimetype);
            }
        }
        catch (error) {
            console.error("Error loading images:", error);
            return [];
        }
        return [];
    }

    public static loadImage(url: string): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = (error) => reject(error);
        });
    };//end

    public static loadImages(urls: string[]): Promise<HTMLImageElement[]> {
        return Promise.all(urls.map(url => this.loadImage(url)));
    };//end

    /*
    public static async getHtmlImages(objsUrls: string[]): Promise<HTMLImageElement[]> {
        try {
            const images = await Promise.all(objsUrls.map(url => ImageLoader.getImageBitmapFromUrl(url)));
            return images;
        } 
        catch (error) { console.error("Error loading images:", error);
            return [];
        }
    }
    */


    static async getImageDimension(file: File): Promise<Dim2d> {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });
        return Promise.resolve({ width: img.width, height: img.height });
    }

    public static getURLImageSource(mimetype:string,imbuffer: ArrayBuffer): string {
        const blob = new Blob([imbuffer], {type: mimetype});
        return URL.createObjectURL(blob);
    }

    static getHtmImageDataURL = async (image: HTMLImageElement, mimetype: string, dimension: Dim2d): Promise<string> => {
        const canvas = document.createElement("canvas");
        canvas.width = dimension.width;
        canvas.height = dimension.height;
        const ctx = canvas.getContext("2d");
        ctx!.drawImage(image, 0, 0, dimension.width, dimension.height);
        return canvas.toDataURL(mimetype);
    }    

    static async dataURLToArrayBuffer(dataURL: string): Promise<ArrayBuffer> {
        const response = await fetch(dataURL);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as ArrayBuffer);
            reader.onerror = () => reject(reader.error);
            reader.readAsArrayBuffer(blob);
        });
    }

    static getDataURL = async (file: File, dim: Dim2d): Promise<string> => {
        const srcOriginal = URL.createObjectURL(file);
        const img = new Image();
        img.src = srcOriginal;
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });

        // Crear una miniatura usando Canvas
        const canvas = document.createElement("canvas");
        canvas.width = dim.width;
        canvas.height = dim.height;
        const ctx = canvas.getContext("2d");
        ctx!.drawImage(img, 0, 0, dim.width, dim.height);
        const dataURL = canvas.toDataURL(file.type);

        URL.revokeObjectURL(srcOriginal);
        return dataURL;
    }

    static async getResizedArrayBuffer(file: File, dim: Dim2d): Promise<ArrayBuffer> {
        const resizedDataURL = await ImageLoader.getDataURL(file, dim);
        return ImageLoader.dataURLToArrayBuffer(resizedDataURL);
    }

    static async getImageBitmap(file: File, dim: Dim2d): Promise<ImageBitmap> {
        const dataURL = await ImageLoader.getDataURL(file, dim);
        const arrayBuffer = await ImageLoader.dataURLToArrayBuffer(dataURL);
        return ImageLoader.arrayBufferToImageBitmap(arrayBuffer, file.type);
    }
    
    /*
     public static async getCvImages(ximages: XImage[]): Promise<ImageBitmap[]> {
        try {
            const images = await Promise.all(
                ximages.map(ximg => ImageLoader.arrayBufferToImageBitmap(ximg.imArrayBuffer,ximg.mimetype))
            );
            return images;
        } 
        catch (error) { console.error("Error loading images:", error);
            return [];
        }
    }    
    */




}//end class