package main

import (
	"md/utils"
	"md/web"
	"os"
)

func main() {
	isDevelopment := os.Getenv("ENVIRONMENT") == "development"
	dbURL := os.Getenv("MONGOLAB_URI")
	if isDevelopment {
		dbURL = os.Getenv("DB_PORT_27017_TCP_ADDR")
	}
	dbURL = "localhost:27017"

	println("isDev", isDevelopment)

	dbAccessor := utils.NewDatabaseAccessor(dbURL, os.Getenv("DIBS_DATABASE_NAME"), 0)
	s := web.NewServer(*dbAccessor, isDevelopment)

	s.Run()
}
