//src\app_front\common\filesmanager.ts

/**
 * FilesManager class
 */
export class FilesManager {

    public static readonly INPUT_AUDIO_FORMATS: string = ".wav,.mp3,.aac";
    public static readonly INPUT_IMAGE_FORMATS: string = ".jpg,.png,.jpeg";
    public static readonly INPUT_VIDEO_FORMATS: string = ".mp4,.avi";
    public static readonly INPUT_CODE_FORMATS: string = ".ts,.js,.py,.json,.sql,.html,.css";
    public static readonly INPUT_TEXT_FORMATS: string = ".txt";
}//end class

/**
 * export Code File function
 * - This function exports a code file with the specified mimetype, 
 *   file name, and code content.
 * - It creates a Blob from the code content, generates an object URL,
 *   and triggers a download
 * - mimetypes in: src\codegen\kernel\cgconstants.ts
 * 
 * - FilesMimeTypes:
        TYPESCRIPT = "text/typescript",
        PYTHON = "text/x-python",		
        JAVASCRIPT = "text/javascript",
        JSON = "application/json",
        SQL = "text/x-sql",
 */
export const exportFile = async (mimetype: string, fileName: string, code: string) => {
    alert("start export");

    const file: File = new File([code], fileName, { type: mimetype });
    const objURL = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = objURL;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(objURL);
    alert("end export");
}//end