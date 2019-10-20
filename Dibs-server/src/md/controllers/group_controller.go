package controllers

import (
	"md/models"
	"md/utils"

	"gopkg.in/mgo.v2/bson"

	"github.com/gin-gonic/gin"
)

// GroupControllerImpl note
type GroupControllerImpl struct {
	scheme   string
	database utils.DatabaseAccessor
}

// NewGroupController note
func NewGroupController(database utils.DatabaseAccessor, isDevelopment bool) *GroupControllerImpl {
	scheme := "http"
	if !isDevelopment {
		scheme += "s"
	}

	return &GroupControllerImpl{
		scheme:   scheme,
		database: database,
	}
}

// Register note
func (gc *GroupControllerImpl) Register(router *gin.Engine) {
	// auth
	user := router.Group("/groups")
	{
		user.GET("", utils.WrapHandler(gc.find))
		user.GET("/:id", utils.WrapHandler(gc.findByID))

		user.POST("/create", utils.WrapHandler(gc.create))
	}
}

func (gc *GroupControllerImpl) find(c *gin.Context) (interface{}, error) {
	db := gc.database.Get()

	type Group = models.Group
	groups, err := (&Group{}).Find(db)
	if err != nil {
		return nil, err
	}
	return groups, nil
}

func (gc *GroupControllerImpl) findByID(c *gin.Context) (interface{}, error) {
	idStr := c.Param("id")
	var id bson.ObjectId
	if bson.IsObjectIdHex(idStr) {
		id = bson.ObjectIdHex(idStr)
	} else {
		return nil, utils.NewError("invalid id: " + idStr)
	}

	db := gc.database.Get()
	var group models.Group
	err := group.FindByID(id, db)
	if err != nil {
		return nil, err
	}
	if group == (models.Group{}) {
		return nil, utils.NewError("group with id: " + idStr + "doesn't exists")
	}
	return group, nil
}

func (gc *GroupControllerImpl) create(c *gin.Context) (interface{}, error) {
	var group models.Group

	if err := c.ShouldBind(&group); err != nil {
		return nil, err
	}

	db := gc.database.Get()
	if err := group.Create(db); err != nil {
		return nil, err
	}

	return group, nil
}
