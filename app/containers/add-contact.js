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
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Фамилия и имя:</label><br />
                    <input ref="name" type="text" required/>
                </p>
                <p>
                    <label>Компания:</label><br />
                    <input ref="company" type="text" />
                </p>
                <p>
                    <label>Email:</label><br />
                    <input ref="email" type="text" />
                </p>
                <p>
                    <label>Телефон:</label><br />
                    <input ref="phone" type="text" />
                </p>
                <p>
                    <label>Фото:</label><br />
                    <input ref="picture" type="text" />
                </p>
                <input type="submit" value="Добавить контакт" />
            </form>
        )
    }
}

export default AddContact;