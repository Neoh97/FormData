import { Link } from "react-router-dom";
import axios from "../config/api";


const FormIncription = () =>{

    const HandlerData = (event) =>{
        event.preventDefault(); 

        const dataForm = {}; 
        let formData = new FormData(document.getElementById("myForm"));
        // 
        formData.forEach((value, key)=>{
            dataForm[key] = value;
        }); 

        const values = Object.values(dataForm); 

        if(values.every(v => v !== "")){

            axios.post("http://localhost:3001/api/inscription", dataForm); 
            // JSON.stringify(dataForm)
           document.getElementById("myForm").reset();
           alert("¡Enviado!");
          
        }

    }

    return (
        <div className="container">
        <h2 className="title is-2" style={{fontSize:"1.875rem"}}>Información</h2>
        <form id="myForm">
            <h3 className="title left-title is-3" style={{fontSize:"1.6rem"}}>Información programas</h3>
            <div className="columns">
                <div className="column">
                    <label className="label">Periodo:<span className="required">*</span></label>
                    <div className="select">
                        <select className="select_document" name="periodo" required>
                            <option value={0}></option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Sede-Jornada:<span className="required">*</span></label>
                    <div className="select">
                        <select className="select_document" name="sedeJornada" required>
                            <option></option>
                            <option>mañana</option>
                            <option>tarde</option>
                            <option>noche</option>
                        </select>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Programa:<span className="required">*</span></label>
                    <div className="select">
                        <select className="select_document" name="programa" required>
                            <option value={0}></option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                        </select>
                    </div>
                </div>
            </div>
            <h3 className="title left-title is-3" style={{fontSize:"1.6rem"}}>Información programas</h3>

            <div className="columns">
                <div className="column">
                    <label className="label">Primer Nombre:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" name="nombre1" required/>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Segundo Nombre:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" name="nombre2" required/>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Primer Apellido:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" name="apellido1" required/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="column">
                    <label className="label">Segundo Apellido:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" name="apellido2" required/>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Tipo de identificación:<span className="required">*</span></label>
                    <div className="select">
                        <select className="select_document" name="document" required>
                            <option value={""}></option>
                            <option value={"CC"}>C.C.</option>
                            <option value={"TI"}>T.I.</option>
                            <option value={"Nit"}>Nit</option>
                        </select>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Número de identificación:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" name="nIdent" required/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="column is-one-third">
                    <div className="control">
                        <label className="label">Sexo:<span className="required">*</span></label>
                        <label className="radio">
                            <input type="radio" name="sexo" value="F" checked/>
                            Femenino
                        </label>
                        <label className="radio">
                            <input type="radio" name="sexo" value="M"/>
                            Masculino
                        </label>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Correo electrónico:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" placeholder="@email.com" name="email" required/>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Teléfono:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" placeholder="" name="tel" required/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="column">
                    <label className="label">Celular:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" placeholder="" name="cel" required/>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Fecha de nacimiento:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="date" placeholder="" name="fecha" required/>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Dirección:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" placeholder="" name="direccion" required/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="column">
                    <label className="label">País:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" placeholder="" name="pais" required/>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Lugar de residencia:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" placeholder="" name="recidencia" required/>
                    </div>
                </div>
                <div className="column">
                    <label className="label">Barrio:<span className="required">*</span></label>
                    <div className="control">
                        <input className="input input_document" type="text" placeholder="" name="barrio" required/>
                    </div>
                </div>
            </div>
        </form>
            <div className="button-form">
                <Link to="/document"><button className="button transparent">Regresar</button></Link>&nbsp;
                <button className="button green" type="submit" form="myForm" onClick={HandlerData}>Continuar</button>
            </div>
    </div>
    ); 
}


export default FormIncription;