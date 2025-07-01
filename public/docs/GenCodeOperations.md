

## Operations 

### Operation Base
	_desc:_ get all ModelTables  from sql script squema
	_function:_  ModelTable[] = CodeGenSql.getEsquemaTables(inputCode);

### Operation Esquemas

	1. *** all complete squema *** 
		_desc:_ Generate all typescriopt class in only one file _.ts_ from sql script squema
		_3 elements included by table_  
				- Class Definition
				- Class Table
				- Type Table
		_function:_ CodeGenTsFilesContent.genFileContentEntityArrayClass(tables);
		
	2. *** all table defs *** 
		_desc:_ generate all table defs in the same file
		_function:_ CodeGenTsFilesContent.getTablesDefCode(tables);
		

	2. *** all table api client services *** 
		_desc:_ generate all table api client services in the same file
		_function:_CodeGenServices.genFileContentArrayServiceClass(tables);
		
  
       const tables: ModelTable[] = CodeGenSql.getEsquemaTables(inputCode);        
        
		
        //all complete squema
        //const tablesCode:string = 
        //    CodeGenTsFilesContent.genFileContentEntityArrayClass(tables);
        //ondataresult(tablesCode);

        //multiple service class
        //const resultCode:string = CodeGenServices.genFileContentArrayServiceClass(tables);
        //setOutputCode(resultCode);
        //ondataresult(resultCode);

        //single table def
        //const table_code:string = CodeGenTsFilesContent.getTableDefCode(tables[0]);
        //console.log(table_code);        

        // multiple table defs
        //const tablesDefCode:string = CodeGenTsFilesContent.getTablesDefCode(tables);
        //ondataresult(tablesDefCode);

        //single class
        //const tableClassCode:string 
        //    = CodeGenTsFilesContent.genFileContentEntityClass(tables[1]);
        //ondataresult(tableClassCode);

        //single type
        //const tableType:string = CodeGenTsFilesContent.genClassTypeContent(tables[0]);
        //ondataresult(tableType);

