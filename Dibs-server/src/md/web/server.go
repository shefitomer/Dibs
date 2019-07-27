package web

import (
	"md/controllers"
	"md/utils"

	"github.com/gin-gonic/gin"
)

// Server note
type Server struct {
	router *gin.Engine
}

// NewServer note
func NewServer(dba utils.DatabaseAccessor, isDevelopment bool) *Server {
	r := gin.Default()
	s := Server{r}

	userController := controllers.NewUserController(dba, isDevelopment)
	userController.Register(r)
	groupController := controllers.NewGroupController(dba, isDevelopment)
	groupController.Register(r)

	return &s
}

// Run note
func (s *Server) Run() {
	s.router.Run() // listen and serve on 0.0.0.0:8080
}
