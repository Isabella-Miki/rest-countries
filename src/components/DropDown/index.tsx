interface Props {
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function DropDown({options, onChange }: Props) {
    return (
        <>
            <label htmlFor="selectFilter"></label>
            <select name="select" id="selectFilter" placeholder="Filter by Region" className="w-2/4 ml-4 md:w-1/5 rounded mt-10 flex justify-between py-4 px-8 bg-mentor-100 dark:bg-dark-100 outline-none" onChange={onChange}>
                <option value="">Filter By region</option>
                {options.map((option) => {
                    return (
                        <option value={option} key={option}>{option}</option>
                    )
                })}
            </select>
        </>
    )
}
