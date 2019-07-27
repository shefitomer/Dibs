package utils

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Handler function that receives gin context and returns result or error
type Handler func(*gin.Context) (interface{}, error)

// WrappedHandler a handler that works with gin http calls
// type WrappedHandler func(*gin.Context)

// WrapHandler wraps the received function
func WrapHandler(h Handler) gin.HandlerFunc {
	var wh = func(c *gin.Context) {
		hRes, err := h(c)

		if err != nil {
			handleError(c, err, "JSON")
		} else {
			handleResult(c, hRes, "JSON")
		}
	}

	return wh
}

func handleError(c *gin.Context, err error, typeStr string) {
	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
}

func handleResult(c *gin.Context, result interface{}, typeStr string) {
	c.JSON(http.StatusOK, result)
}
