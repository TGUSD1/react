function Employee(props){
    return <>
    <h3>Employee {props.name}</h3>
    {props.role ? <h4 className="role">{props.role}</h4> : <p className="norole">No Role</p>}
    </>
}

export default Employee;