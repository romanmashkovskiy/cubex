import React, {Component} from 'react';

class  AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: true};
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
        }
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label>Фамилия и имя</label>
                    <input ref="name" type="text" placeholder="Фамилия и имя" required/>
                </div>
                <div className="field">
                    <label>Компания</label>
                    <input ref="company" type="text" placeholder="Компания"/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input ref="email" type="email" placeholder="Email"/>
                </div>
                <div className="field">
                    <label>Телефон</label>
                    <input ref="phone" type="text" placeholder="Телефон"/>
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