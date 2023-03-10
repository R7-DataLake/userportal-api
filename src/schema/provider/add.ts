import S from 'fluent-json-schema'

const schema = S.object()
  .prop('code', S.string().maxLength(15).required())
  .prop('prename', S.string().maxLength(50).required())
  .prop('fname', S.string().maxLength(100).required())
  .prop('lname', S.string().maxLength(100).required())
  .prop('sex', S.string().maxLength(1).required())
  .prop('birth', S.string().maxLength(8).minLength(8).required())
  .prop('provider_type', S.string().maxLength(15).required())
  .prop('start_date', S.string().maxLength(8).minLength(8))
  .prop('end_date', S.string().maxLength(8).minLength(8))
  .prop('cid', S.string().maxLength(13).required())
  .prop('register_no', S.string().maxLength(50).required())
  .prop('council', S.string().maxLength(2))

export default {
  body: schema
}