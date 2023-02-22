import { Link } from "react-router-dom";

const Document = () =>{

    const HandlerData = (event) =>{
        const dataForm = {}; 
        let formData = new FormData(document.getElementById("InfDocument"));
        // 
        formData.forEach((value, key)=>{
            dataForm[key] = value;
        }); 
         let data = JSON.stringify(dataForm);
         localStorage.setItem("DataUser", data);
        // console.log(dataForm);
    }


    return (
        
        <div className="container" style={{height:"100vh"}}>
        <h2 className="title">Ingrese su identificación</h2>
        <form className="card card-center" id="InfDocument">
            <div className="grawper">
                <label className="label">Tipo de Documento<span className="required">*</span></label>
                <div className="select">
                    <select className="select_document" name="tipo">
                        <option vaalue={""}></option>
                        <option value={"CC"}>C.C.</option>
                        <option value={"TI"}>T.I.</option>
                        <option value={"Nit"}>Nit</option>
                    </select>
                </div>
            </div>
            <div className="grawper">
                <label className="label">Numero de identificación<span className="required">*</span></label>
                <div className="control">
                    <input className="input input_document" type="text" placeholder="" name="nIdent"/>
                </div>
            </div>
        </form>
        <div className="buttons">
            <Link to="/"><button className="button transparent">Regresar</button></Link>&nbsp;
            <Link to="/inscription"><button className="button green" onClick={HandlerData}>Continuar</button></Link>
        </div>
    </div>
    ); 
}

export default Document; 