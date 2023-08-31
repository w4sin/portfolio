import _ from "lodash"
import { setCurrentInput } from "../../redux/MathSlice"
import { useAppDispatch } from "../../redux/hook"
import { MathItemInput } from "./MathInterface"

interface Props {
  values: MathItemInput
  index: number
}

const Input = ({ values, index }: Props): JSX.Element => {
  const { name, show, unit, min, max } = values
  const dispatch = useAppDispatch()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value.replaceAll(",", "").slice(0, max.toString().length)
    const value = _.toNumber(num)
    const newValue = (value < min ? min : value > max ? max : value)
    if (_.isNaN(value)) return
    dispatch(setCurrentInput({ mathIndex: index, value: newValue, show: value }))
  }
  const checkMinMax = (): string => {
    return (show < min || show > max) ? "flex" : "hidden"
  }

  return (
    <tr>
      <td>
        <p className="font-bold mr-5 text-end txt-s">{name}</p>
      </td>
      <td>
        <div className="flex flex-col">
          <div className="flex items-center">
            <input type="text" id={name} value={show.toLocaleString()} className="w-36 px-3 py-2 text-center rounded-md txt-s" onChange={handleInput} />
            <p className="txt-s ml-3">{unit}</p>
          </div>
          <p className={"text-red-500 " + checkMinMax()}>{"please input between " + min + "-" + max}</p>
        </div>
      </td>
    </tr>
  )
}

export default Input