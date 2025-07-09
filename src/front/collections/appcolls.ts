//src\front\collections\appcolls.ts
import { Option } from "@/common/models";

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

    public static Codelangs: TCodelang[] = [
        { id: 1, cgname: "typescript", icon: "tsicon" },
        { id: 2, cgname: "python", icon: "pyicon" },
        { id: 3, cgname: "sql", icon: "sqlicon" },
        { id: 4, cgname: "javascript", icon: "jsicon" },
        { id: 5, cgname: "css", icon: "cssicon" },
        { id: 6, cgname: "java", icon: "javaicon" },
        { id: 7, cgname: "c++", icon: "cppicon" }
    ];

    public static CODELANGS:Option[]=[
        new Option("typescript", "TypeScript", "tsicon", null, null),
        new Option("python", "Python", "pyicon", null, null),
        new Option("sql", "SQL", "sqlicon", null, null),
        new Option("javascript", "JavaScript", "jsicon", null, null),
        new Option("css", "CSS", "cssicon", null, null),
        new Option("java", "Java", "javaicon", null, null),
        new Option("c++", "C++", "cppicon", null, null)

    ]

}//end class AppColls