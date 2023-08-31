import _ from "lodash"
import { setCurrentSelect } from "../../redux/MathSlice"
import { useAppDispatch } from "../../redux/hook"
import { MathItemSelect } from "./MathInterface"


interface Props {
  values: MathItemSelect
  index: number
}

const Selector = ({ values, index }: Props) => {
  const { curSelect, select, name, type } = values
  const dispatch = useAppDispatch()

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const curSelect = _.toNumber(e.target.value)
    dispatch(setCurrentSelect({ mathIndex: index, current: curSelect }))
  }

  return (
    <tr className="">
      <td><p className="font-bold mr-5 text-end txt-s">{name}</p></td>
      <td>
        {type == "select" ?
          (<select id={name} value={curSelect} onChange={handleSelect} className="w-auto p-3 txt-s rounded-lg">
            {select.map(({ show }, index) => (
              <option key={show} value={index}>{show}</option>
            ))}
          </select>)
          : type == "radio" ? (
            <div className="flex">
              {select.map(({ show }, index) => (
                <div key={show} className="mr-5 flex items-center">
                  <input type="radio" id={show} onChange={handleSelect} checked={index == curSelect} value={index} className="w-[20px] h-[20px] mr-2 txt-s" />
                  <label htmlFor={show} className="txt-s">{show}</label>
                </div>
              ))}
            </div>
          ) : null
        }
      </td>
    </tr>
  )
}

export default Selector