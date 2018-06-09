import React, {Component} from 'react';

class  EditContact extends Component {
    constructor(props) {
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validateName(name) {
        return name.length>2;
    }
    validateCompany(company) {
        return company.length>2;
    }
    validateEmail(email) {
        return email.length>2;
    }
    validatePhone(phone) {
        return phone.length>2;
    }
    validatePicture(picture) {
        return picture.length>2;
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.validateName(this.refs.name.value) &&
            this.validateCompany(this.refs.company.value) &&
            this.validateEmail(this.refs.email.value) &&
            this.validatePhone(this.refs.phone.value) &&
            this.validatePicture(this.refs.picture.value)
        )
        {
            this.props.edit({
                id: this.props.contact.id,
                name: this.refs.name.value,
                company: this.refs.company.value,
                email: this.refs.email.value,
                phone: this.refs.phone.value,
                picture: this.refs.picture.value,
                editMode: false
            });

        } else {
            if (this.validateName(this.refs.name.value)) {
                this.refs.name.parentElement.className = "field";
            } else {
                this.refs.name.parentElement.className = "field error";
            }
            if (this.validateCompany(this.refs.company.value)) {
                this.refs.company.parentElement.className = "field";
            } else {
                this.refs.company.parentElement.className = "field error";
            }
            if (this.validateEmail(this.refs.email.value)) {
                this.refs.email.parentElement.className = "field";
            } else {
                this.refs.email.parentElement.className = "field error";
            }
            if (this.validatePhone(this.refs.phone.value)) {
                this.refs.phone.parentElement.className = "field";
            } else {
                this.refs.phone.parentElement.className = "field error";
            }
            if (this.validatePicture(this.refs.picture.value)) {
                this.refs.picture.parentElement.className = "field";
            } else {
                this.refs.picture.parentElement.className = "field error";
            }
        }
    }

    render() {
            return (
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Фамилия и имя</label>
                        <input ref="name" type="text" placeholder="Фамилия и имя" defaultValue={this.props.contact.name}/>
                    </div>
                    <div className="field">
                        <label>Компания</label>
                        <input ref="company" type="text" defaultValue={this.props.contact.company} placeholder="Компания"/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input ref="email" type="text" defaultValue={this.props.contact.email} placeholder="Email"/>
                    </div>
                    <div className="field">
                        <label>Телефон</label>
                        <input ref="phone" type="text" defaultValue={this.props.contact.phone} placeholder="Телефон"/>
                    </div>
                    <div className="field">
                        <label>Фото(ссылка)</label>
                        <input ref="picture" type="text" defaultValue={this.props.contact.picture} placeholder="Picture"/>
                    </div>
                    <button className="ui positive button" type="submit">Сохранить изменения</button>
                </form>
            )
    }
}

export default EditContact;