export default function TabButton({children, onClickHandle, isActive}) {
    return <li>
        <button className={isActive ? "active" : undefined} onClick={onClickHandle}>{children}</button>
    </li>
}