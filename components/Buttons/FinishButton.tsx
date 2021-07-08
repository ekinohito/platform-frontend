import NormalButton from "./NormalButton";
import {useAppSelector} from "../../store";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {setAnswer, setAnswers} from "../../reducers/exam";

export default function FinishButton() {
    const router = useRouter()
    const token = useAppSelector(state => state.exam.token)
    const answers = useAppSelector(state => state.exam.questions.map(value => value.answer))
    const dispatch = useDispatch()
    return answers.reduce((previousValue, currentValue) => previousValue && currentValue != undefined, true) ?
        <NormalButton onClick={async () => {
            await fetch(process.env.NEXT_PUBLIC_BACKEND_SERVER + '/api/endexam', {
                method: "POST", body: JSON.stringify({token, results: answers})
            })
            const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_SERVER + '/api/results', {
                method: "POST", body: JSON.stringify({token})
            })
            const data = await res.json()
            dispatch(setAnswers(data.results))
            await router.push('/result')
        }}>
            Закончить попытку
        </NormalButton> :
        <></>
}