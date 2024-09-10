
export default function Input({type , label, onChange}){
return     <p>
<label>{label}</label>
<input type={type} required onChange={onChange}></input>
</p>
}