//src\front\collections\appcolls.ts
import { Option, OptionId } from "@/common/models";

/*
1	"typescript"
2	"python"
3	"sql"
4	"javascript"
5	"css"
6	"java"
7	"c++"
*/

export type TCodelang = {
    id:number;
    cgname:string;
    icon?:string;
};

/**
 * class AppColls
 * - front-end application common collections
 */
export class AppColls {

    /*
    public static Codelangs: TCodelang[] = [
        { id: 1, cgname: "typescript", icon: "tsicon" },
        { id: 2, cgname: "python", icon: "pyicon" },
        { id: 3, cgname: "sql", icon: "sqlicon" },
        { id: 4, cgname: "javascript", icon: "jsicon" },
        { id: 5, cgname: "css", icon: "cssicon" },
        { id: 6, cgname: "java", icon: "javaicon" },
        { id: 7, cgname: "c++", icon: "cppicon" }
    ];
    */

    public static CODELANGS_OPT:OptionId[]=[
        new OptionId(1, "TypeScript", "tsicon"),
        new OptionId(2, "Python", "pyicon"),
        new OptionId(3, "SQL", "sqlicon"),
        new OptionId(4, "JavaScript", "jsicon"),
        new OptionId(5, "CSS", "cssicon"),
        new OptionId(6, "Java", "javaicon"),
        new OptionId(7, "C++", "cppicon")
    ]

    public static CODELANGS_OPsT:Option[]=[
        new Option("1", "TypeScript", "tsicon"),
        new Option("2", "Python", "pyicon"),
        new Option("3", "SQL", "sqlicon"),
        new Option("4", "JavaScript", "jsicon"),
        new Option("5", "CSS", "cssicon"),
        new Option("6", "Java", "javaicon"),
        new Option("7", "C++", "cppicon")
    ];
}//end class AppColls