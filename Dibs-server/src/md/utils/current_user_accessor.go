package utils

import (
	"md/models"
	"net/http"

	"github.com/gorilla/context"
)

// CurrentUserAccessor note
type CurrentUserAccessor struct {
	key int
}

// NewCurrentUserAccessor note
func NewCurrentUserAccessor(key int) *CurrentUserAccessor {
	return &CurrentUserAccessor{key}
}

// Set note
func (cua *CurrentUserAccessor) Set(r *http.Request, user *models.User) {
	context.Set(r, cua.key, user)
}

// Clear note
func (cua *CurrentUserAccessor) Clear(r *http.Request) {
	context.Delete(r, cua.key)
}

// Get note
func (cua *CurrentUserAccessor) Get(r *http.Request) *models.User {
	if rv := context.Get(r, cua.key); rv != nil {
		return rv.(*models.User)
	}
	return nil
}
