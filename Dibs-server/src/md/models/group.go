package models

import (
	"time"

	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"
)

// Group note
type Group struct {
	// identification information
	ID   bson.ObjectId `bson:"_id" form:"id" json:"id"`
	Name string        `bson:"name" form:"name" json:"name" binding:"required"`

	// analytics information
	CreationDate time.Time `bson:"creation_date" form:"creation_date" json:"creation_date"`
}

// Groups note
type Groups []Group

func (g *Group) coll(db *mgo.Database) *mgo.Collection {
	return db.C("group")
}

// NewGroup creates new group
func NewGroup(name string) *Group {
	return &Group{
		ID:           bson.NewObjectId(),
		Name:         name,
		CreationDate: time.Now(),
	}
}

// Find returns the plural type of the model
func (g *Group) Find(db *mgo.Database) (Groups, error) {
	q := g.coll(db).Find(nil)

	var gs Groups
	err := q.All(&gs)
	return gs, err
}

// FindByID note
func (g *Group) FindByID(id bson.ObjectId, db *mgo.Database) error {
	return g.coll(db).FindId(id).One(&g)
}

// FindByName note
func (g *Group) FindByName(name string, db *mgo.Database) error {
	return g.coll(db).Find(bson.M{"name": name}).One(g)
}

// Create note
func (g *Group) Create(db *mgo.Database) error {
	if len(g.ID) == 0 {
		g.ID = bson.NewObjectId()
	}

	return g.Save(db)
}

// Save note
func (g *Group) Save(db *mgo.Database) error {
	_, err := g.coll(db).UpsertId(g.ID, g)
	return err
}

// Update note
func (g *Group) Update(name string, db *mgo.Database) {
	g.Name = name
	g.Save(db)
}

// Delete note
func (g *Group) Delete(db *mgo.Database) error {
	return g.coll(db).RemoveId(g.ID)
}
