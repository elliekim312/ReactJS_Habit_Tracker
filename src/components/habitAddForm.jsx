import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const inputRef = React.createRef();
    const formRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();

    }
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} className="add-input" type="text" placeholder="Enter your habit."></input>
            <button className="add-btn">Add</button>
        </form>    
    );            
});

export default HabitAddForm;







// //components
// import React, { PureComponent } from 'react';

// class HabitAddForm extends PureComponent {

//     inputRef = React.createRef();
//     formRef = React.createRef();

//     onSubmit = (event) => {
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         this.formRef.current.reset();

//     }

//     render() {
//         return (
//             <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//                 <input ref={this.inputRef} className="add-input" type="text" placeholder="Enter your habit."></input>
//                 <button className="add-btn">Add</button>
//             </form>    
//         );
//     }
// }

// export default HabitAddForm;