console.log('App.js is running!')

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subTitle: 'This is an example of learning app',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');

    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert('My decision is ' + option);
};

const appRoot = document.getElementById('app');


const render = () => {
    
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
            <button onClick={onMakeDecision} disabled={app.options.length < 1}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();
