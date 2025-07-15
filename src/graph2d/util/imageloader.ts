//src\graph2d\util\imageloader.ts

import { Dim2d } from "../types2d";


/**
 * ImageLoader.getImageBitmapFromUrl
 */
export class ImageLoader {

    //.................................................................................   
    // ImageURLs
    //.................................................................................   
    static getHtmImageDataURL = async (image: HTMLImageElement, mimetype: string, dim: Dim2d): Promise<string> => {
        const canvas = document.createElement("canvas");
        canvas.width = dim.width;
        canvas.height = dim.height;
        const ctx = canvas.getContext("2d");
        ctx!.drawImage(image, 0, 0, dim.width, dim.height);
        return canvas.toDataURL(mimetype);
    }   

    //.................................................................................   
    // ImageBitmaps
    //.................................................................................
    public static async getImageBitmap(url: string): Promise<ImageBitmap> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = async () => {
                const imageBitmap = await createImageBitmap(img);
                resolve(imageBitmap);
            }    
            img.onerror = (err) => reject(err);
        });
    };//end

    public static async geArrayImageBitmap(objsUrls: string[]): Promise<ImageBitmap[]> {
        let images: ImageBitmap[] = [];
        try {
            images = await Promise.all(objsUrls.map(url => ImageLoader.getImageBitmap(url)));
           
        } 
        catch (error) { console.error("Error loading images:", error);
            return [];
        }
         return images;
    };//end


    public static async createImageBitmap(buffer:ArrayBuffer,mimeType:string): Promise<ImageBitmap> {
        const blob = new Blob([buffer], { type: mimeType });
        return await createImageBitmap(blob); 
    };//end


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


    //.................................................................................   
    // Files
    //.................................................................................   
    static getFileHTMLImageElement(file: File): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = URL.createObjectURL(file);            
            img.onload = () => resolve(img);
            img.onerror = (error) => {
                URL.revokeObjectURL(img.src); //
                reject(new Error("Error al cargar la imagen")); 
            };
        });
    };//end

    static getFileDataURL = async (file: File, dim: Dim2d): Promise<string> => {
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
    };//end

    static async getImageDimension(file: File): Promise<Dim2d> {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });
        return Promise.resolve({ width: img.width, height: img.height });
    };//end


    //.................................................................................   
    // Buffers (ArrayBuffer)
    //.................................................................................
    /*
    static async getFileResizedArrayBuffer(file: File, dim: Dim2d): Promise<ArrayBuffer> {
        const resizedDataURL = await ImageLoader.getFileDataURL(file, dim);
        return ImageLoader.getUrlImageBuffer(resizedDataURL);
    };//end

    static async getFileImageBitmap(file: File, dim: Dim2d): Promise<ImageBitmap> {
        const dataURL = await ImageLoader.getFileDataURL(file, dim);
        const arrayBuffer = await ImageLoader.getUrlImageBuffer(dataURL);
        return ImageLoader.createImageBitmap(arrayBuffer, file.type);
    };//end    

    public static createImageObjectUrlFromBf(mimetype:string,imbuffer: ArrayBuffer): string {
        const blob = new Blob([imbuffer], {type: mimetype});
        return URL.createObjectURL(blob);
    };//end

    static async getUrlImageBuffer(dataURL: string): Promise<ArrayBuffer> {
        const response = await fetch(dataURL);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as ArrayBuffer);
            reader.onerror = () => reject(reader.error);
            reader.readAsArrayBuffer(blob);
        });
    };//end

    public static async createArrayImageBitmapsFbfs(imgbuffers:ArrayBuffer[]): Promise<ImageBitmap[]> {
        let mimetype = "image/png"; 
        let cvimages: ImageBitmap[] = [];
        try {
            for (let idx=0;idx<imgbuffers.length;idx++) {
                cvimages[idx] = await ImageLoader.createImageBitmap(imgbuffers[idx], mimetype);
            }
        }
        catch (error) {
            console.error("Error loading images:", error);
            return [];
        }
        return [];
    };//end
    */

}//end class