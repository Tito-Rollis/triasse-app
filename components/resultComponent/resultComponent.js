import Image from 'next/image';
export default function ResultComponent({ title }) {
    return (
        <div className="border rounded-sm w-fit flex items-center justify-between p-3 h-10 bg-green-100 border-green-200">
            <h1 className="text-subTitle  text-green-300 mr-8">{title}</h1>
            <Image src="/img/close.svg" width="16" height="16" alt="result" />
        </div>
    );
}
