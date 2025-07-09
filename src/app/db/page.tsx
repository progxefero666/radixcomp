//src\app\db\page.tsx


interface CompProps {
    name?: string;
}

export const PageDatabase = ({ name }: CompProps) => {

    return (      
        <div>
            <h1>Database Page</h1>  
            <p>Name: {name}</p>
        </div>
    )

}//end comp 