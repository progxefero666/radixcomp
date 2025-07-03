//src\radix\forms\formutil.ts

// Tipos necesarios para las funciones de utilidad
type ValidityStateKey = keyof ValidityState;
type CustomMatcherArgs = [string, FormData];

// Tipos específicos para validación personalizada
type SyncCustomMatcher = (value: string, formData: FormData) => boolean;
type AsyncCustomMatcher = (value: string, formData: FormData) => Promise<boolean>;
type CustomMatcher = SyncCustomMatcher | AsyncCustomMatcher;
type CustomMatcherEntry = { id: string; match: CustomMatcher };
type SyncCustomMatcherEntry = { id: string; match: SyncCustomMatcher };
type AsyncCustomMatcherEntry = { id: string; match: AsyncCustomMatcher };

/**
 * Convierte un objeto ValidityState a un objeto Record
 */
export function validityStateToObject(validity: ValidityState) {
  const object: any = {};
  for (const key in validity) {
    object[key] = validity[key as ValidityStateKey];
  }
  return object as Record<ValidityStateKey, boolean>;
}

/**
 * Verifica si un elemento es un HTMLElement
 */
export function isHTMLElement(element: any): element is HTMLElement {
  return element instanceof HTMLElement;
}

/**
 * Verifica si un elemento es un control de formulario con propiedad validity
 */
export function isFormControl(element: any): element is { validity: ValidityState } {
  return 'validity' in element;
}

/**
 * Verifica si un control está en estado inválido
 */
export function isInvalid(control: HTMLElement) {
  return (
    isFormControl(control) &&
    (control.validity.valid === false || control.getAttribute('aria-invalid') === 'true')
  );
}

/**
 * Obtiene el primer control inválido en un formulario
 */
export function getFirstInvalidControl(form: HTMLFormElement): HTMLElement | undefined {
  const elements = form.elements;
  const [firstInvalidControl] = Array.from(elements).filter(isHTMLElement).filter(isInvalid);
  return firstInvalidControl;
}

/**
 * Verifica si una entrada de validación personalizada es asíncrona
 */
export function isAsyncCustomMatcherEntry(
  entry: CustomMatcherEntry,
  args: CustomMatcherArgs
): entry is AsyncCustomMatcherEntry {
  return entry.match.constructor.name === 'AsyncFunction' || returnsPromise(entry.match, args);
}

/**
 * Verifica si una entrada de validación personalizada es síncrona
 */
export function isSyncCustomMatcherEntry(entry: CustomMatcherEntry): entry is SyncCustomMatcherEntry {
  return entry.match.constructor.name === 'Function';
}

/**
 * Verifica si una función devuelve una promesa
 */
export function returnsPromise(func: Function, args: Array<unknown>) {
  return func(...args) instanceof Promise;
}

/**
 * Verifica si un ValidityState tiene errores incorporados
 */
export function hasBuiltInError(validity: ValidityState) {
  let error = false;
  for (const validityKey in validity) {
    const key = validityKey as ValidityStateKey;
    if (key !== 'valid' && key !== 'customError' && validity[key]) {
      error = true;
      break;
    }
  }
  return error;
}

/**
 * Determina el valor del atributo data-valid
 */
export function getValidAttribute(validity: ValidityState | undefined, serverInvalid: boolean) {
  if (validity?.valid === true && !serverInvalid) return true;
  return undefined;
}

/**
 * Determina el valor del atributo data-invalid
 */
export function getInvalidAttribute(validity: ValidityState | undefined, serverInvalid: boolean) {
  if (validity?.valid === false || serverInvalid) return true;
  return undefined;
}