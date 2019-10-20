package utils

import (
	"net/http"

	"gopkg.in/mgo.v2"
)

// DatabaseAccessor note
type DatabaseAccessor struct {
	*mgo.Session
	url  string
	name string
	key  int
}

// NewDatabaseAccessor note
func NewDatabaseAccessor(url, name string, key int) *DatabaseAccessor {
	session, _ := mgo.Dial(url)
	session.DB(name).C("service").EnsureIndex(mgo.Index{Key: []string{"search"}})

	return &DatabaseAccessor{session, url, name, key}
}

// Set note
func (d *DatabaseAccessor) Set(r *http.Request, db *mgo.Session) {
	// context.Set(r, d.key, db.DB(d.name))
}

// Get note
func (d *DatabaseAccessor) Get() *mgo.Database {
	return d.DB(d.name)
	// if rv := context.Get(r, d.key); rv != nil {
	// 	return rv.(*mgo.Database)
	// }
	// return nil
}
