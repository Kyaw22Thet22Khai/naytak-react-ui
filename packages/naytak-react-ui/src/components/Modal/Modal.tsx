import {
  useEffect,
  useId,
  useRef,
  useState,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from "react";

export type ModalSize = "default" | "small" | "large";
export type ModalTransition =
  | "fade"
  | "scale"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right";

export interface ModalProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> {
  open: boolean;
  onClose?: () => void;
  title?: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  transition?: ModalTransition;
  transitionDuration?: number;
}

const sizeClass = (size: ModalSize | undefined) => {
  const s = size ?? "default";
  switch (s) {
    case "small":
      return "ui-modal--sm";
    case "large":
      return "ui-modal--lg";
    case "default":
    default:
      return "ui-modal--md";
  }
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
  {
    open,
    onClose,
    title,
    footer,
    size = "default",
    transition = "fade",
    transitionDuration = 200,
    className,
    children,
    ...props
  },
  ref
) {
  const titleId = useId();
  const [rendered, setRendered] = useState<boolean>(open);
  const [exiting, setExiting] = useState<boolean>(false);
  const exitTimer = useRef<number | null>(null);
  const [entering, setEntering] = useState<boolean>(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Mount/unmount with exit animation support
  useEffect(() => {
    if (open) {
      setRendered(true);
      setExiting(false);
      setEntering(true);
      // drop the entering flag on next frame to allow CSS transition
      requestAnimationFrame(() => {
        setEntering(false);
      });
      if (exitTimer.current) {
        window.clearTimeout(exitTimer.current);
        exitTimer.current = null;
      }
    } else if (rendered) {
      setExiting(true);
      if (exitTimer.current) window.clearTimeout(exitTimer.current);
      exitTimer.current = window.setTimeout(() => {
        setRendered(false);
        setExiting(false);
        exitTimer.current = null;
      }, transitionDuration);
    }
    return () => {
      if (exitTimer.current) {
        window.clearTimeout(exitTimer.current);
        exitTimer.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, transitionDuration]);

  if (!rendered) return null;

  const rootCls = [
    "ui-modal",
    sizeClass(size),
    `ui-modal--fx-${transition}`,
    exiting ? "is-exiting" : entering ? "is-entering" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleOverlayClick = () => onClose?.();
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      className={rootCls}
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      data-state={exiting ? "exit" : "enter"}
      style={{
        // @ts-ignore custom CSS var for durations
        "--ui-modal-duration": `${transitionDuration}ms`,
      }}
      {...props}>
      <div className="ui-modal__overlay" onClick={handleOverlayClick}>
        <div className="ui-modal__content" onClick={stop}>
          {title ? (
            <div className="ui-modal__header">
              <div className="ui-modal__title" id={titleId}>
                {title}
              </div>
              {onClose ? (
                <button
                  type="button"
                  className="ui-modal__close"
                  aria-label="Close"
                  onClick={onClose}>
                  ×
                </button>
              ) : null}
            </div>
          ) : onClose ? (
            <button
              type="button"
              className="ui-modal__close ui-modal__close--noheader"
              aria-label="Close"
              onClick={onClose}>
              ×
            </button>
          ) : null}
          <div className="ui-modal__body">{children}</div>
          {footer ? <div className="ui-modal__footer">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
});
