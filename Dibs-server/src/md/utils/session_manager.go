package utils

import (
	"net/http"

	sessions "github.com/goincremental/negroni-sessions"
)

// SessionManager note
type SessionManager interface {
	Get(*http.Request, string) string
	Set(*http.Request, string, string)
	Delete(*http.Request, string)
}

// SessionManagerImpl note
type SessionManagerImpl struct {
}

// NewSessionManager note
func NewSessionManager() *SessionManagerImpl {
	return &SessionManagerImpl{}
}

// Get note
func (sa *SessionManagerImpl) Get(req *http.Request, key string) string {
	if val := sessions.GetSession(req).Get(key); val != nil {
		return val.(string)
	}

	return ""
}

// Set note
func (sa *SessionManagerImpl) Set(req *http.Request, key, value string) {
	sessions.GetSession(req).Set(key, value)
}

// Delete note
func (sa *SessionManagerImpl) Delete(req *http.Request, key string) {
	sessions.GetSession(req).Delete(key)
}
