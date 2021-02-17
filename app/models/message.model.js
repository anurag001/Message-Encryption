module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        content:{type:String,required:true},
        encryption_type:{type:String,required:true},
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Message = mongoose.model("messages", schema);
    return Message;
  };