import BackButton from "../Views/BackButton"
import { IoSyncOutline as DefaultIcon } from "react-icons/io5"
import { MdPlaylistAddCircle as AddIcon, MdCreate as EditIcon, MdDelete as DeleteIcon } from "react-icons/md"
import { useAppDispatch, useAppSelector } from "../../redux/hook"
import { deleteData, selectMath, setTitle, setDefault } from "../../redux/MathSlice"
import Selector from "./Selector"
import { MathItemSelect, MathItemInput } from "./MathInterface"
import _ from "lodash"
import Input from "./Input"

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

const Content = () => {
    const math = useAppSelector(selectMath)
    const dispatch = useAppDispatch();

    const resultFormula = () => {
        try {
            const _math = math.data[math.choose]
            const answer = _math.answer
            let _formula: string = _math.formula;
            _math.math.forEach((v, index) => {
                let value: string = "";
                if ("value" in v) value = _.toString(v.value)
                else if ("select" in v) value = _.toString(v.select[v.curSelect].value)
                _formula = _formula.replaceAll(alphabet[index], value);
            });
            const result = answer.isDecimal
                ? Math.round(calculate(_formula))
                : calculate(_formula);
            return result
                .toString()
                .slice(0, answer.length)
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        } catch (e) {
            return "formula syntax error.";
        }
    };

    const calculate = (fn: string) => {
        return new Function("return " + fn)();
    };

    return (
        <main>
            <div style={{ backgroundColor: 'rgb(226, 232, 240)', backgroundImage: 'radial-gradient(at 40% 39%, rgb(148, 163, 184) 0, transparent 56%), radial-gradient(at 100% 100%, rgb(148, 163, 184) 0, transparent 33%)' }}
                className="max-w-screen min-h-screen relative flex flex-col items-center p-5">
                <BackButton />
                <h2 className="txt-xl text-slate-800 font-bold">Custom Math</h2>
                <div className="w-full max-w-6xl h-full flex flex-col items-center">
                    <div className="mt-10 w-full flex flex-col lg:flex-row justify-between items-center">
                        <div className="flex space-x-4">
                            <select value={math.title} onChange={(e) => dispatch(setTitle(e.target.value))} className="w-auto pl-3 pr-5 txt-s rounded-lg">
                                {math.data.map(({ title }) => (
                                    <option key={title} value={title}>{title}</option>
                                ))}
                            </select>
                            <ButtonMath name="Use Default" icon={<DefaultIcon />} onClick={()=>dispatch(setDefault())}/>
                        </div>
                        <div className="flex mt-4 lg:mt-0 space-x-3">
                            <ButtonMath name="Add" icon={<AddIcon />} />
                            <ButtonMath name="Edit" icon={<EditIcon />} />
                            <ButtonMath name="Delete" icon={<DeleteIcon />} onClick={() => dispatch(deleteData(math.title))} />
                        </div>
                    </div>
                    {math.data[math.choose] && <div className="w-full min-h-[50vh] md:min-h-[70vh] mt-7 xl:mt-10 flex flex-col justify-center items-center">
                        <div className="w-full p-10 flex flex-col justify-center border border-black rounded-lg shadow-md shadow-slate-500">
                            <table className="w-full flex justify-center items-center border-separate border-spacing-5">
                                <tbody>
                                    {math.data[math.choose]?.math.map((value, index) => (
                                        (value.type == "select" || value.type == "radio") ? <Selector key={value.name} values={value as MathItemSelect} index={index} /> :
                                            value.type == "input" ? <Input key={value.name} values={value as MathItemInput} index={index} /> : null
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="w-full p-10 mt-10 flex flex-col items-center border border-black rounded-lg shadow-md shadow-slate-500">
                            <h3 className="txt-l font-semibold text-center">{math.data[math.choose].answer.front + " " + resultFormula() + " " + math.data[math.choose].answer.unit}</h3>
                            <p className="mt-3 lg:mt-5 txt-s whitespace-pre-line text-center">{math.data[math.choose].answer.detail}</p>
                        </div>
                    </div>}

                </div>
            </div>
        </main>
    )
}

interface ButtonProps {
    name: string;
    icon: JSX.Element;
    onClick?: () => void;
}

const ButtonMath = ({ name, icon, onClick }: ButtonProps): JSX.Element => {
    return <button key={name} className="flex items-center px-4 py-3 border border-slate-500 hover:border-white text-slate-700 hover:text-white rounded-lg hover:bg-gradient-to-r from-slate-600 via-slate-800 to-slate-600"
        onClick={onClick}>
        <span className="txt-s mr-2">{icon}</span>
        {name}
    </button>
}

export default Content