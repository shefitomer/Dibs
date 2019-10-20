package middleware

import (
	"github.com/codegangsta/negroni"
	"md/utils"
	"net/http"
)

// Database note
type Database struct {
	da utils.DatabaseAccessor
}

// NewDatabase note
func NewDatabase(da utils.DatabaseAccessor) *Database {
	return &Database{da}
}

// Middleware note
func (d *Database) Middleware() negroni.HandlerFunc {
	return func(rw http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
		reqSession := d.da.Clone()
		defer reqSession.Close()
		d.da.Set(r, reqSession)
		next(rw, r)
	}
}
