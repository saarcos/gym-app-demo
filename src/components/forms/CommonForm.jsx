import { Fragment } from "react";
import CommonInput from "./CommonInput";
import { useForm } from "react-hook-form"

const inputTypes = {
    INPUT: 'input',
    SELECT: 'select',
}
const CommonForm = ({ formControls = [], onSubmit, btnText }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const renderComponent = (formControl) => {
        const fieldName = formControl.name;
        let content;
        switch (formControl.componentType) {
            case inputTypes.INPUT:
                content = <CommonInput id={formControl.id} label={formControl.label} placeholder={formControl.placeholder} type={formControl.type} autocomplete={formControl.autocomplete} error={errors?.[fieldName]?.message} {...register(fieldName, formControl.validation || {})} />
                break;
            default:
                return null;
        }
        return content;
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {formControls.map((formControl) => {
                return (<Fragment key={formControl.id}>{renderComponent(formControl)}</Fragment>);
            })}
            <button className="w-full bg-slate-900 border border-cyan-400 text-[#e0f2fe] font-bold py-2 rounded-lg mt-5 shadow-[0_0_8px_#22d3ee] hover:shadow-[0_0_15px_#22d3ee] transition cursor-pointer">
                {btnText || 'Submit'}
            </button>
        </form>
    )
}

export default CommonForm