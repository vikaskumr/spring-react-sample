
export interface AnnouncerProps {
    message: string
}

export const Announcer = (props:AnnouncerProps ) => (
    <div role="region" aria-live="polite" className="visually-hidden">
        {props.message}
    </div>
);

