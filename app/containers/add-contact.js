import React, {Component} from 'react';

class  AddContact extends Component {
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
        return email.includes("@");
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
            this.props.addContact({
                name: this.refs.name.value,
                company: this.refs.company.value,
                email: this.refs.email.value,
                phone: this.refs.phone.value,
                picture: this.refs.picture.value
            });
            this.refs.name.value=
                this.refs.company.value=
                    this.refs.email.value=
                        this.refs.phone.value=
                            this.refs.picture.value='';
            this.props.setAddMode(false);
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
                    <input ref="name" type="text" placeholder="Фамилия и имя" />
                </div>
                <div className="field">
                    <label>Компания</label>
                    <input ref="company" type="text" placeholder="Компания"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input ref="email" type="text" placeholder="Email"/>
                </div>
                <div className="field">
                    <label>Телефон в формате</label>
                    <input ref="phone" type="text" placeholder="Телефон" />
                </div>
                <div className="field">
                    <label>Фото(ссылка)</label>
                    <input ref="picture" type="text" placeholder="Picture"/>
                </div>
                <button className="ui positive button" type="submit">Добавить контакт</button>
            </form>
        )
    }
}

export default AddContact;