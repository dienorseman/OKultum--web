import { useMemo, useState } from "react"
import type { Password } from "../models/password";

export const useTablePagination = (passwords: Password[], rowsPerPage: number) => {

    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(passwords.length / rowsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const paginatedItems = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        return passwords.slice(start, start + rowsPerPage);
    }, [page, passwords, rowsPerPage]);

    const start = (page - 1) * rowsPerPage + 1;
    const end = Math.min(page * rowsPerPage, passwords.length);

    return { start, end, paginatedItems, pages, page, setPage, totalPages }

}
