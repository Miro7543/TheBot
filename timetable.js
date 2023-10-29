import xlsx from "xlsx";
import fs from "fs";

export async function readExcel(filename){
    filename="timetable.xlsx"
    let workbook = xlsx.readFile(`./temp/${filename}`);
    let sheet=workbook.Sheets[workbook.SheetNames[0]];
    sheet['!merges'].forEach(merge=>{
        const {s,e}=merge;
        let value =sheet[ xlsx.utils.encode_cell(s) ];
        value=value ? value.v : '';
        // console.log(value);
        for(let row=s.r;row<e.r;row++){
            for(let col=s.c;col<e.c;col++){
                console.log(row,col);
                console.log(sheet[xlsx.utils.encode_cell({r:row,c:col})])
                sheet[xlsx.utils.encode_cell({r:row,c:col})].v=value;
            }
        }
    })
    let data=xlsx.utils.sheet_to_csv(sheet,{
        headers:1,
    });
    fs.writeFile("temp.csv",data,()=>{});
    // console.log(data);
} 
readExcel();