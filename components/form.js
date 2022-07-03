import styles from "../styles/herobanner.module.css";

export const HeroBanner = () => {
    return (
<div class="card">
    <h5>Vertical</h5>
    <div class="field">
        <label for="firstname1">Firstname</label>
        <input id="firstname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
    </div>
    <div class="field">
        <label for="lastname1">Lastname</label>
        <input id="lastname1" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full">
    </div>
</div>
);
};