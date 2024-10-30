import useInputState from "../../Hooks/customHook";

const Contact = () => {
    const nameState = useInputState('')
    const emailState = useInputState('')
    const passwordState = useInputState('')
    const handleSubmit = event => {
        event.preventDefault()
        console.log(nameState.value)
        console.log(emailState.value)
        console.log(passwordState.value)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...nameState} className="p-3 border-2 border-green-600 mt-3" placeholder="name" type="text" name="name" /> <br />
                <input {...emailState} className="p-3 border-2 border-green-600 mt-3" placeholder="email" type="email" name="email" /> <br />
                <input {...passwordState} className="p-3 border-2 border-green-600 mt-3" placeholder="password" type="password" name="password" /> <br />
                <input className="p-3 border-2 border-red-600 mt-3" type="submit" value="Submit" /> <br />
            </form>
        </div>
    );
};

export default Contact;