import React, {Component} from 'react';
import {withStyles} from "material-ui/styles/index";
import TextField from "material-ui/TextField/TextField";

const styles = theme => ({
    typography: {
        userSelect: "none",
    },
    textField: {
        marginBottom: 16
    }
});

class TypographyEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            firstClick: false
        };
    }

    handleDoubleClick = () => {
        if (this.state.firstClick === true) {
            this.setState({firstClick: false, isEdit: true})
        }
        this.state.firstClick = true;
        setTimeout(() => this.state.firstClick = false, 1000);
    };

    onBlurHandler = () => {
        this.setState({isEdit: false})
    };

    onChangeHandler = (e) => {
        this.setState({text: e.target.value});
    };

    render() {
        const {children} = this.props;
        this.state.text = this.state.text || children.props.children;

        if (this.state.isEdit) {
            return (
                <TextField autoFocus
                           onBlur={this.onBlurHandler}
                           onChange={this.onChangeHandler}
                           className={this.props.classes.textField}
                           id="name"
                           value={this.state.text}
                           margin="none"/>
            )
        }

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, {
                className: this.props.classes.typography,
                onClick: this.handleDoubleClick,
            }));

        return <div>{childrenWithProps}</div>
    }
}

export default withStyles(styles)(TypographyEdit);