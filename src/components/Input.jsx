
const Input = (props) => {
    return (
        <>
            <div>
                <input type="text" value={props.word} onChange={props.handleChange} placeholder="Type a word or number" />
            </div>
        </>
    );
};

export default Input;
