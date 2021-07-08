import NormalButton from "./NormalButton";
import {useAppSelector} from "../../store";
import {useRouter} from "next/router";

export default function FinishButton() {
    const router = useRouter()
    const token = useAppSelector(state => state.exam.token)
    const answers = useAppSelector(state => state.exam.questions.map(value => value.answer))
    return answers.reduce((previousValue, currentValue) => previousValue && currentValue != undefined, true)?
        <NormalButton onClick={() => {
            fetch('/api/finish', {method: "POST", body: JSON.stringify({token, answers})}).then()
            router.push('/result').then()
        }}>
        Закончить попытку
        </NormalButton>:
        <></>
}