//src\app_front\appconstants.ts

import { Option } from "@/common/model/option";

/**
 * class AppConstants.NOT_DEF
 */
export class AppConstants {

    public static readonly CHAR_SPACE:string = " ";

    public static readonly NOT_DEF:string = "undefined";
    public static readonly NAV_BACK : string = "navigation_back";

    public static readonly ACT_OPEN:string = "open";
    public static readonly ACT_SAVE:string = "save";
    public static readonly ACT_EXPORT:string = "export";
    public static readonly ACT_COPY:string = "copy";

    public static readonly MODE_INSERT:string = "insert";
    public static readonly MODE_EDITION:string = "edit";
    public static readonly MODE_READONLY:string = "read";

    public static readonly ACT_COLLECTION_CLEAR:string = "insert";
    public static readonly ACT_ITEM_INSERT:string = "insert";
    public static readonly ACT_ITEM__UPDATE:string = "update";
    public static readonly ACT_ITEM__DELETE:string = "delete";
   
    public static readonly DISPLAY_ROW:string = "display-row";
    public static readonly DISPLAY_COLUMN:string = "display-col";

    public static readonly INPUT_AUDIO_FORMATS:string = ".wav,.mp3,.aac"
    public static readonly INPUT_IMAGE_FORMATS: string = ".jpg,.png,.jpeg";
    public static readonly INPUT_VIDEO_FORMATS = ".mp4,.avi";  

}//end class


