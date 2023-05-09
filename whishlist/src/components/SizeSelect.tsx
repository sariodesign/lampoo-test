interface SelectProps {
    active: boolean;
    handlerOpener: () => void;
    handleValue: (e:any) => void;
    sizes: SizeProps[];
    value: string
}

interface SizeProps {
    id: number;
    name: string
}

const SizeSelect = (props: SelectProps) => {    
    return ( 
        <div className={`border-2 border-black relative mb-4 ${props.active ? "group is-open" : ""}`}>
            <div className="flex items-center justify-between p-4 cursor-pointer" onClick={props.handlerOpener}>
                <span className="text-sm font-bold uppercase">{props.value}</span>
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                </svg>
            </div>
            <div className="options group-[.is-open]:block">
                {props.sizes.map(size => <div className="cursor-pointer text-left p-4 hover:bg-slate-50" key={size.id} onClick={props.handleValue}>{size.name}</div>)}
            </div>
        </div>
    )
}

export default SizeSelect