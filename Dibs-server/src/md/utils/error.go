package utils

import (
	"time"
)

// Error note
type Error struct {
	When    time.Time
	Message string
}

// NewError creates a new error with the message and default values
func NewError(message string) error {
	return Error{
		time.Now(),
		message,
	}
}

func (e Error) Error() string {
	return e.Message
}
