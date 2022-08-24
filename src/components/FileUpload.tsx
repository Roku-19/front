import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../css/main.css";
//import { compressImg } from "../helpers/setup.helper";
import useFormHelper from "../helpers/useFormHelper";
import { postFile } from "../services/api.service";
//import { postFile } from "../services/file.service"

interface IFileUpload {
    setRoute: (path: string) => void,
}

const FileUpload: React.FC<IFileUpload> = ({ setRoute }) => {
    const [selected, setSelected] = useState([{ file: "" }]);

    async function onFileChange(e: any) {
        for (let element of e.target.files) {
            const formData = new FormData();

            formData.append(
                "file",
                element,
                element.name
            );

            formData.append('_method', 'PUT');

            await postFile(formData).then(v=>{
                if(v.data.successed){
                    setRoute(v.data.img);
                };
            });
        };

        const lst: { file: string }[] = [];
        for (let element of e.target.files) {
            lst.push({
                file: URL.createObjectURL(element)
            })
        };
        setSelected(lst);
    };

    return (
        <div className="rounded-lg text-center py-2 px-lg-5">
            <div className="rounded form-group inputDnD">
                <label className="sr-only py-2" htmlFor="file">
                    <h5>Subir Una Imagen</h5>
                </label>
                <input
                    id="file"
                    type="file"
                    name="file"
                    accept="image/*"
                    className="form-control-file text-primary font-weight-bold"
                    onChange={onFileChange}
                    data-title="Arrastra los archivos, o haz clic aquí."
                />
            </div>
            <div className="rounded-lg container-fluid py-2">
                {(selected[0].file) && selected.map((val: any, index) =>
                    <img src={val.file} alt={index.toString()} key={index} width="100px" />
                )}
            </div>
        </div>
    )
}

export default FileUpload;