import { TranslationMessages } from "ra-core";

const romanianMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: "Adaugă filtru",
            add: "Adăugă",
            back: "Înapoi",
            bulk_actions:
                "1 articol selectat |||| %{smart_count} articole selectate",
            cancel: "Anulează",
            clear_input_value: "Șterge valoarea",
            clone: "Copiază",
            confirm: "Confirmă",
            create: "Creează",
            delete: "Șterge",
            edit: "Editează",
            export: "Exportă",
            list: "Listează",
            refresh: "Reîncarcă",
            remove_filter: "Șterge acest filtru",
            remove: "Șterge",
            save: "Salvează",
            search: "Caută",
            show: "Arată",
            sort: "Sortează",
            undo: "Anulează",
            unselect: "Deselectează",
            expand: "Extinde",
            close: "Închide",
            open_menu: "Deschide meniu",
            close_menu: "Închide meniu",
        },
        boolean: {
            true: "Da",
            false: "Nu",
            null: "",
        },
        page: {
            create: "Creează %{name}",
            dashboard: "Dashboard",
            edit: "%{name} #%{id}",
            error: "Ceva n-a mers bine",
            list: "%{name}",
            loading: "Încărcare",
            not_found: "Nu s-a găsit",
            show: "%{name} #%{id}",
            empty: "Nu sunt %{name} încă.",
            invite: "Vrei să adaugi?",
        },
        input: {
            file: {
                upload_several:
                    "Trageți aici fișiere pentru a le încărca sau clic pentru a selecta unul.",
                upload_single:
                    "Trageți aici un fișier pentru a-l încărca sau clic pentru a selecta unul.",
            },
            image: {
                upload_several:
                    "Trageți aici imagini pentru a le încărca sau clic pentru a selecta una.",
                upload_single:
                    "Trageți aici o imagine pentru a o încărca sau clic pentru a selecta una.",
            },
            references: {
                all_missing: "Nu se pot găsi datele referențiate.",
                many_missing:
                    "Cel puțin una dintre referințele asociate nu mai este disponibilă.",
                single_missing: "Referința asociată nu mai este disponibilă.",
            },
            password: {
                toggle_visible: "Ascunde parola",
                toggle_hidden: "Arată parola",
            },
        },
        message: {
            about: "Despre",
            are_you_sure: "Sunteți sigur?",
            bulk_delete_content:
                "Sigur doriți să ștergeți articolul %{name}? |||| Sigur doriți să ștergeți aceste %{smart_count} articole?",
            bulk_delete_title:
                "Șterge %{name} |||| Șterge %{smart_count} %{name}",
            delete_content: "Sigur doriți să ștergeți acest articol?",
            delete_title: "Șterge %{name} #%{id}",
            details: "Detalii",
            error:
                "A apărut o eroare și solicitarea dvs. nu a putut fi finalizată",
            invalid_form: "Formularul nu este valid. Verificați erorile.",
            loading: "Pagina se încarcă, doar un moment...",
            no: "Nu",
            not_found:
                "Fie ați introdus o adresă URL greșită, fie ați urmărit un link necorespunzător",
            yes: "Da",
            unsaved_changes:
                "Unele dintre modificările dvs. nu au fost salvate. Sunteți sigur că doriți să le ignorați?",
        },
        navigation: {
            no_results: "Nu au fost găsite rezultate",
            no_more_results:
                "Numărul de pagină %{page} este în afara limitelor. Încercați pagina anterioară.",
            page_out_of_boundaries:
                "Numărul de pagină %{page} este în afara limitelor",
            page_out_from_end: "Nu se poate merge după ultima pagină",
            page_out_from_begin: "Nu se poate merge înainte de pagina 1",
            page_range_info: "%{offsetBegin}-%{offsetEnd} din %{total}",
            page_rows_per_page: "Rânduri pe pagină:",
            next: "Următorul",
            prev: "Precedentul",
            skip_nav: "Sari la conținut"
        },
        sort: {
            sort_by: "Sortează după %{field} %{order}",
            ASC: "ascendentă",
            DESC: "descendentă"
        },
        auth: {
            auth_check_error: "Vă rugăm să vă autentificați pentru a continua",
            user_menu: "Profil",
            username: "Nume utilizator",
            password: "Parolă",
            sign_in: "Conectare",
            sign_in_error:
                "Autentificarea a eșuat. Vă rugăm să încercați din nou.",
            logout: "Deconectare",
        },
        notification: {
            updated:
                "Articolul s-a actualizat |||| S-au actualizat %{smart_count} articole",
            created: "Articolul s-a creat",
            deleted:
                "Articolul s-a șters |||| S-au șters %{smart_count} articole",
            bad_item: "Articol incorect",
            item_doesnt_exist: "Articolul nu există",
            http_error: "Eroare de comunicare cu serverul",
            data_provider_error:
                "Eroare dataProvider. Verificați detaliile în consolă.",
            i18n_error:
                "Traducerile nu pot fi încărcate pentru limba specificată",
            canceled: "Acțiunea a fost anulată",
            logged_out: "Sesiunea dvs. s-a încheiat, vă rugăm să vă reconectați.",
        },
        validation: {
            required: "Obligatoriu",
            minLength: "Trebuie să fie cel puțin %{min} caractere",
            maxLength: "Trebuie să fie maxim %{max} caractere",
            minValue: "Trebuie să fie cel puțin %{min}",
            maxValue: "Trebuie să fie cel mult %{max}",
            number: "Trebuie să fie un număr",
            email: "Trebuie să fie un e-mail valid",
            oneOf: "Trebuie să fie una dintre: %{options}",
            regex:
                "Trebuie să corespundă unui format specific (regex): %{pattern}",
        },
    },
};

export default romanianMessages;
