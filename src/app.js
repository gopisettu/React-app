import { useEffect, useState } from "react"

const MySkill = () => {
    const [tech, setText] = useState("");
    const [val, setVal] = useState(0);

    useEffect(() => {
        document.title = `You clicked the button ${val} times`;
    }, [val]);

    const rand = () => {
        const techArray = ["ML", "AI", "Full Stack", "MERN Stack", "BlockChain","DL","Testing","Cyber Security"];
        const randomIndex = Math.floor(Math.random() * techArray.length);
        setText(techArray[randomIndex]);
        setVal(val + 1);
    }

    return (
        <div>
            <h1 style={{display:"flex",alignItems:"center",justifyContent:"center"}}>LEARN {tech} TECHNOLOGY</h1>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <button onClick={rand} style={{ padding:"10px",margin:"5px"}}>Choose Path</button>         
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <h1>Number Of Times Button Clicked {val}</h1>
                    </div>   
        </div>
    )
}


export default MySkill
