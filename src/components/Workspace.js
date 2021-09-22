import React from "react";

export default class Workspace extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            editText: "",
            editID: -1
        }
    }


    handleClick = (e) => {
        let id = parseInt((e.target.id).substring(10), 10);
        if(e.detail === 2)
            this.handleToggle(id);
    }
    handleToggle(id) {
        this.setState({
            editID: id
        });
    }
    handleKeyPress = (e) => {
        if(e.code === "Enter")
            this.handleBlur();
    }
    handleBlur = (e) => {
        this.props.currentList.items[this.state.editID] = this.state.editText;
        this.props.updateListCallback(this.props.currentList);
        this.setState({ editText: "",
                        editID: -1});
    }
    handleUpdate = (e) => {
        this.setState({editText: e.target.value});
    }
    /**handleDrag = (e) => {

    }

    handleDragOver = (e) => {

    }

    handleDrop = (e) => {

    }**/

    


    render() {
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    {   this.props.currentList == null ? "" :
                        <div id="edit-items">
                            {   this.state.editID === 0 ? 
                                <input  id='edit-item-0'
                                        className="top5-item"
                                        type='text'
                                        onKeyPress={this.handleKeyPress}
                                        onBlur={this.handleBlur}
                                        onChange={this.handleUpdate}
                                        defaultValue={(this.props.currentList.items[0])}
                                        autoFocus
                                />
                                :
                                <div    id="top5-item-0" 
                                        className="top5-item"
                                        onClick={this.handleClick}>
                                        {(this.props.currentList.items[0])}
                                </div>
                            }
                            {   this.state.editID === 1 ? 
                                <input  id='edit-item-1'
                                        className="top5-item"
                                        type='text'
                                        onKeyPress={this.handleKeyPress}
                                        onBlur={this.handleBlur}
                                        onChange={this.handleUpdate}
                                        defaultValue={(this.props.currentList.items[1])}
                                        autoFocus
                                />
                                :
                                <div    id="top5-item-1" 
                                        className="top5-item"
                                        onClick={this.handleClick}>
                                        {(this.props.currentList.items[1])}
                                </div>
                            }
                            {   this.state.editID === 2 ? 
                                <input  id='edit-item-2'
                                        className="top5-item"
                                        type='text'
                                        onKeyPress={this.handleKeyPress}
                                        onBlur={this.handleBlur}
                                        onChange={this.handleUpdate}
                                        defaultValue={(this.props.currentList.items[2])}
                                        autoFocus
                                />
                                :
                                <div    id="top5-item-2" 
                                        className="top5-item"
                                        onClick={this.handleClick}>
                                        {(this.props.currentList.items[2])}
                                </div>
                            }
                            {   this.state.editID === 3 ? 
                                <input  id='edit-item-3'
                                        className="top5-item"
                                        type='text'
                                        onKeyPress={this.handleKeyPress}
                                        onBlur={this.handleBlur}
                                        onChange={this.handleUpdate}
                                        defaultValue={(this.props.currentList.items[3])}
                                        autoFocus
                                />
                                :
                                <div    id="top5-item-3" 
                                        className="top5-item"
                                        onClick={this.handleClick}>
                                        {(this.props.currentList.items[3])}
                                </div>
                            }
                            {   this.state.editID === 4 ? 
                                <input  id='edit-item-4'
                                        className="top5-item"
                                        type='text'
                                        onKeyPress={this.handleKeyPress}
                                        onBlur={this.handleBlur}
                                        onChange={this.handleUpdate}
                                        defaultValue={(this.props.currentList.items[4])}
                                        autoFocus
                                />
                                :
                                <div    id="top5-item-4" 
                                        className="top5-item"
                                        onClick={this.handleClick}>
                                        {(this.props.currentList.items[4])}
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}