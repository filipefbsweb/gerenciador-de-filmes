export interface IInputForm {
    titleLabel: {
        required: true,
        type: String,
    },
    nameInput: {
        required: true,
        type: String,
    },
    typeInput: {
        required: true,
        type: String,
    },
    placeholderInput: {
        required: true,
        type: String,
    },
    inputDisabled: {
        required: false,
        type: Boolean,
    },
    error: {
        required: false,
        type: Boolean,
    },
    valueForm: {
        required: false,
        type: String,
    }
}
